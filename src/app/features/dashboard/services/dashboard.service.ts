import { Injectable } from '@angular/core';
import { SummaryCardData } from '../models/summary-card.model';
import { Project } from '../models/project.model';

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

  getProjects(): Project[] {
    return [
      {
        name: 'DevTask AI',
        description: 'Sistema de gerenciamento de projetos com recursos de IA.',
        progress: 50,
      },
      {
        name: 'Coder Kids',
        description: 'Plataforma de cursos e gerenciamento de alunos.',
        progress: 45,
      },
      {
        name: 'Meu terceiro projeto',
        description: 'Projeto para estudos de desenvolvimento.',
        progress: 30,
      },
    ];
  }
}