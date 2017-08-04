import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import { AbstractService } from './abstract.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class PatientService extends AbstractService {
  private hisURL: string;
  private paginationURL: string;

  constructor(protected http: Http) {
    super(http);
    this.baseURL = environment.baseURL + environment.patient.baseURL;
    this.hisURL = environment.patient.hisURL;
    this.paginationURL = environment.patient.paginationURL;
  }

  getPatientsByHIS(his: string): Observable<any> {
    return Observable.of(JSON.parse('{ \
    "dtoList": [ \
        { \
            "id": "405", \
            "name": "ACACIO DE ASSUNCAO", \
            "fullName": "ACACIO MOREIRA DE ASSUNCAO", \
            "birthDate": { \
                "dateTime": 624765600 \
            }, \
            "email": "abel.pedro@gmail.com", \
            "mobilePhone": "+55(21) 965365151", \
            "photo": null, \
            "login": "<Não informado>", \
            "cpf": "12636581723" \
        } \
    ], \
    "urlSelf": "identifier=source%3Amv%7C", \
    "urlPrevious": null, \
    "urlNext": null, \
    "total": 2 \
      }'));
    // const options = new RequestOptions();
    // options.params = new URLSearchParams();
    // options.params.set('system', his);
    // return super.get(this.hisURL, options);
  }

  paginate(url: string): Observable<any> {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('url', url);
    return super.get(this.paginationURL, options);
  }
}
