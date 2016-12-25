import {PersistenceEventEmitter} from "./persistence-event-emitter.service";
export interface AutoSaveable {

    entityChanged:boolean;
    persistenceEventEmitter: PersistenceEventEmitter;

    markEntityChanged():void;
    saveChanges():void;
}