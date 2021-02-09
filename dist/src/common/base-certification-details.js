"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificationDetails = void 0;
class CertificationInterface {
}
class CertificationDetails extends CertificationInterface {
    constructor(_id, name, provider, CertificateLink) {
        super();
        this.data = {
            _id,
            CertificateLink,
            name,
            provider,
        };
    }
    parseDetails() {
        return this.data;
    }
}
exports.CertificationDetails = CertificationDetails;
