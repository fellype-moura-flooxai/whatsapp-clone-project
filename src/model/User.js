import { Firebase } from './../util/Firebase'
import { ClassEvent } from '../util/ClassEvent'


export class User extends ClassEvent {

    static getRef(){

        return Firebase.db().collection('/users');
    }

    static getContactsRef(id){

        return User.getRef()
        .doc(id)
        .collection('contacts')

    }

    static findByEmail(email){

        return User.getRef().doc(email);
    }

    addContact(contact) {

       return User.getContactsRef(this.email)
        .doc(btoa(contact.email))
        .set(contact.toJSON());

    }

    getContacts(){

        return new Promise((s, f)=>{

            User.getContactsRef(this.email).onSnapshot(docs => {

                let contacts = [];

                docs.forEach(doc => {

                    let data = doc.data();

                    data.id = doc.id;

                    contacts.push(data);

                });

                this.trigger('contactschange', docs);

                s(contacts);

            });
        
        });

    }
}