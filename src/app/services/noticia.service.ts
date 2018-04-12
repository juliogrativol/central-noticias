import { Noticia } from './../models/noticia';
import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';



@Injectable()
export class NoticiaService {

    private _Url = 'https://3zg1cigkpk.execute-api.us-east-1.amazonaws.com/v1/noticias';
    constructor(private http: Http) { }


    getNoticias(): Observable<Noticia[]> {
        return this.http.get(this._Url)
            .map((response: Response) => <Noticia[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }


    postNoticia(noticia: Noticia): Observable<Noticia> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._Url, noticia, options)
            .map((response: Response) => <Noticia>response.json())
            .catch(this.handleError);
    }

    deleteNoticia(id: String): Observable<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this._Url+"/"+id, options)
            .map((response: Response) => <Noticia>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
