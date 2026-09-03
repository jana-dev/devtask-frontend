import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  getProjects(): Project[] {
    return [
      {
        name: 'DevTask AI',
        description: 'Sistema de gerenciamento de projetos com recursos de IA.',
        progress: 50,
        totalTasks: 12,
        completedTasks: 5
      },
      {
        name: 'Coder Kids',
        description: 'Plataforma de cursos e gerenciamento de alunos.',
        progress: 45,
        totalTasks: 20,
        completedTasks: 19
      },
      {
        name: 'Meu terceiro projeto',
        description: 'Projeto para estudos de desenvolvimento.',
        progress: 30,
        totalTasks: 10,
        completedTasks: 5
      },
    ];
  }
}
