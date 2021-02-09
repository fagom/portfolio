import { Schema } from "mongoose";
interface Certification {
    data: {
        _id: Schema.Types.ObjectId;
        name: string;
        provider: string;
        CertificateLink: string;
    };
}
declare abstract class CertificationInterface<T extends Certification> {
    abstract data: T["data"];
}
export declare class CertificationDetails extends CertificationInterface<Certification> {
    data: Certification["data"];
    constructor(_id: Schema.Types.ObjectId, name: string, provider: string, CertificateLink: string);
    parseDetails(): {
        _id: Schema.Types.ObjectId;
        name: string;
        provider: string;
        CertificateLink: string;
    };
}
export {};
