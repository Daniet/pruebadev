import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response } from '@angular/http'

declare var $:any

@Component({
  selector: 'app-tabla-data',
  templateUrl: './tabla-data.component.html',
  styleUrls: ['./tabla-data.component.scss']
})
export class TablaDataComponent implements OnInit {

  tableHead = []
  tableBody = []
  cantCol:number = 0
  panel:string = ''

  constructor(private activatedRoute:ActivatedRoute, private http:Http){ }

  getData(table:string){
    this.http.get('http://127.0.0.1:8180/' + table).subscribe((res:Response)=>{
      this.tableHead = []
      this.tableBody = []
      this.panel = table
      var data = res.json()
      for(let x in data[0]){
        this.tableHead.push(x.replace(/_/g, ' '))
      }
      $('#t-foot-data tr td').attr('colspan', this.tableHead.length + 2)
      for(let x in data){
        var row = []
        for(let y in data[x]){
          row.push(data[x][y])
        }
        this.tableBody.push(row)
      }
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params) => {
      this.getData(params['panel'])
    });

  }

}
