const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {

    constructor(){

        this._config = {
                apiKey: "AIzaSyAqTuJGp2ywV8CKoXfX4Tf3907-7x_s9Xo",
                authDomain: "whatsapp-clone-804c7.firebaseapp.com",
                projectId: "whatsapp-clone-804c7",
                storageBucket: "whatsapp-clone-804c7.firebasestorage.app",
                messagingSenderId: "250582536471",
                appId: "1:250582536471:web:45bafac3ff6d79ac652752"
              };
        

        this.init();

            }

        init(){

            if (!window._initializedFirebase) {
                firebase.initializeApp(this._config);

                firebase.firestore().settings({
                    timestampsInSnapshots: true
                });

                window._initializedFirebase = true;

                 }
            }

            static db(){

                return firebase.firestore();
            }

            static hd(){

                return firebase.storage();
            }

            initAuth(){

                return new Promise((s, f)=>{

                    let provider = new firebase.auth.GoogleAuthProvider();

                firebase.auth().signInWithPopup(provider)
                .then(result => {

                    let token = result.credential.acessToken;
                    let user = result.user;
                    
                    s({
                        user,
                        token
                    });

                })
                .catch(err=>{
                    f(err);
                });
                
          });

    }


}
