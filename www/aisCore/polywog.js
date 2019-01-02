/* PolyFactory
  Takes a sound model factory (promise) and the max number of sounds you might need to play simultaneously.
  You can treat the poly sound returned by this factory like an aiSoundModel except:
    a) It is not composable with other models 
    b) play(val,id), release(val,id), stop(val,id) all take an extra argument allowing you to specify which voice you are referring to 
        (if you don't specifiy that parmameter, poly manages it for you and play() returns the id it is using if you want to use it for parameter setting or releasing/stopping)
    c) Setting parameters on the poly object affect *all* future voices played without specifiying an id.

  You can also just use this object to simplify the creation of a bunch of sound models of a particular type, and then 
  get them with getSndFromPoly(id), then do all your playing and parmeter setting on the individual voices
*/

var polywog=function(sfactory, numPoly, ...theRest){
  var voiceList=[];
  var paramZombie={};
  var lastPoly=0;
  var nextPoly=0;

  // returns index of next available sound in the voiceList pool
  var nextAvailableVoice=function(n){
    let na=(n+1)%numPoly;
    for(let i=0;i<numPoly;i++){
      if (! voiceList[na].isPlaying()){
        //console.log("next availble = " + na)
        return na;
      }
      na=(na+1)%numPoly;
    }
    // if you got here, they were all playing and the na points to the voiceList[n+1]
    voiceList[na].stop();
    console.log("next availble (stolen) = " + na)
    return na;
  }

  // fill an array with *different* promisses (not copies of the same promise!)
  var promisedLand = [];
  for(let j = 0;j<numPoly+1;j++){
    promisedLand[j]=sfactory();
  }

  return new Promise((resolve, reject) => {
    Promise.all(promisedLand).then((vals)=>{
      console.log("parray is ready")
      voiceList=vals;//.slice(0,vals.length-1);
      paramZombie=voiceList.pop();//vals.pop();  // This will be returned to the user as an interface for the polyphinic model(s)

      for(let i=0;i<voiceList.length;i++){
        voiceList[i].hasOwnParams=false;
      }
      
    // set all params and play, return id so user can specificall stop or release it
    // @return - the index of snd in the poly list (which can be used to release or stop the specific sound)
      paramZombie.play=function({stime=0, etime=paramZombie.BIGNUM, id=-1}={}){
        // Can pass in either positional or named in object (but not both)
        if (typeof arguments[0] != 'object'){
          //console.log("passing in positional parameters")
          stime=arguments[0]?arguments[0]:stime;
          etime=arguments[1]?arguments[1]:etime;
          id=arguments[2]?arguments[2]:id;
        }
        if (id == -1){
          // use generic params
          if (! voiceList[nextPoly].hasOwnParams){
            let np=paramZombie.getNumParams()
            for(let i=1;i<np;i++){  // IGNORE THE FIRST - ASSUMING IT IS PLAY
               voiceList[nextPoly].setParam(i,paramZombie.getParam(i))
             }
           }

           //console.log("polyWog will play voice " + nextPoly)
           voiceList[nextPoly].play(stime, etime);
           lastPoly=nextPoly;
           nextPoly=nextAvailableVoice(lastPoly);
           
         } else{ // play the specific one requested using previously set parameters
            //console.log("polyWog will play voice " + id)
            voiceList[id].play(stime, etime);
            lastPoly=id;
            if (id==nextPoly){
              nextPoly=nextAvailableVoice(lastPoly);
            } // else no need to update nexPoly
         }
          //console.log("     polyWog will return " + lastPoly)
         return lastPoly;
      }

      // release specific model if id is specified, otherwise release all
      paramZombie.release=function({rtime=0, id=-1}={}){
        // Can pass in either positional or named in object (but not both)
        if (typeof arguments[0] != 'object'){
          //console.log("passing in positional parameters")
          rtime=arguments[0]?arguments[0]:rtime;
          id=arguments[1]?arguments[1]:id;
        }

        if (id == -1){
          for(let i=0;i<numPoly;i++){
            if (voiceList[i].isPlaying()) {
              voiceList[i].release(rtime);
            }
          }
        } else{
          voiceList[id].release(rtime);
        }
      }

    // stop specific model if id is specified, otherwise release all
      paramZombie.stop=function(etime=0, id=-1){
        // Can pass in either positional or named in object (but not both)
        if (typeof arguments[0] != 'object'){
          //console.log("passing in positional parameters")
          etime=arguments[0]?arguments[0]:etime;
          id=arguments[1]?arguments[1]:id;
        }

        if (id == -1){
          for(let i=0;i<numPoly;i++){
            if (voiceList[i].isPlaying()) {
              voiceList[i].stop(etime);
            }
          }
        } else{
          voiceList[id].stop(etime);
        }
      }

      // get an individual sound model from the poly pool so you can set its parameters, etc. if you need that level of control
      paramZombie.getSndFromPoly=function(id=-1){
        if (id == -1){
          return voiceList[nextPoly];
        }
        else{
          console.log("getSndFromPoly returning voiceList number " + id)
          return voiceList[id];
        }
      }

      resolve(paramZombie);

    });
  }); // Promise returned by polyFactory
}

export {polywog as default} 
