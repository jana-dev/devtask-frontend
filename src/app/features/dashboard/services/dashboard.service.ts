import { Injectable } from '@angular/core';
import { SummaryCardData } from '../models/summary-card.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getSummaryCards(): SummaryCardData[] {
    return [
      {
        title: 'Projetos',
        value: 4,
      },
      {
        title: 'Em andamento',
        value: 8,
      },
      {
        title: 'Pendências',
        value: 2,
      },
      {
        title: 'Concluídas',
        value: 12,
      },
    ];
  }
}