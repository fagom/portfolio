import { Schema } from "mongoose";

interface Certification {
  data: {
    _id: Schema.Types.ObjectId;
    name: string;
    provider: string;
    CertificateLink: string;
  };
}

abstract class CertificationInterface<T extends Certification> {
  abstract data: T["data"];
}

export class CertificationDetails extends CertificationInterface<Certification> {
  data: Certification["data"];

  constructor(
    _id: Schema.Types.ObjectId,
    name: string,
    provider: string,
    CertificateLink: string
  ) {
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
