import { Firebase } from './../util/Firebase'
import { ClassEvent } from '../util/ClassEvent'


export class User extends ClassEvent {

    static getRef(){

        return Firebase.db().collection('/users');
    }

    static findByEmail(email){

        return User.getRef().doc(email);
    }

    addContact(contact) {

        User.getRef()
        .doc (this.email)
        .collection('contacts')
        .doc(btoa(contact.email))
        .set(contact.toJSON());

    }
}