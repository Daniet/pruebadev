import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response } from '@angular/http'

@Component({
  selector: 'app-from-data',
  templateUrl: './from-data.component.html',
  styleUrls: ['./from-data.component.scss']
})
export class FromDataComponent implements OnInit {

    constructor(private activatedRoute:ActivatedRoute, private http:Http){ }

  campFrom:any

  getFrom(table:string, id:number){
    this.http.get('http://127.0.0.1:8180/' + table + '/' + id).subscribe((res:Response)=>{
      this.campFrom = []
      let data = res.json()[0]
      for(let x in data){
        if(x != 'id'){
          this.campFrom.push({
            name: x,
            value: data[x].toString()
          })
        }
      }
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params) => {
      this.getFrom(params['panel'], params['id'])
    });
  }

}
