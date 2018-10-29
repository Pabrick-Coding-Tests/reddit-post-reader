import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    public list: Array<any>;
    public currentId: string;

    constructor (private http: HttpClient) {
        this.getData().subscribe((data: any) => {
            this.list = data.data.children;
        });
    }

    public getData(): Observable<any> {
        return this.http.get<any>(`https://www.reddit.com/r/pics/new.json?sort=new`);
    }

    public setCurrent(id: string) {
        this.currentId = id;
    }
}
