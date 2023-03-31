import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from './services/campeonato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tabela!: any;

  ngOnInit(): void {
    this.tabela = this.campeonatoService.getTabelaSerieB();
  }

  constructor(private campeonatoService: CampeonatoService) {}
}
