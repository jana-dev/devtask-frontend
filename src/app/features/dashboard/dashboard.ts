import { Component, inject } from '@angular/core';
import { SummaryCard } from './components/summary-card/summary-card';
import { ProjectCard } from './components/project-card/project-card';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  imports: [SummaryCard, ProjectCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private dashboardService = inject(DashboardService);

  summaryCards = this.dashboardService.getSummaryCards();
  projects = this.dashboardService.getProjects();
}
