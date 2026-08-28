import { Component, input } from '@angular/core';
import { SummaryCardData } from '../../models/summary-card.model';

@Component({
  selector: 'app-summary-card',
  imports: [],
  templateUrl: './summary-card.html',
  styleUrl: './summary-card.scss',
})
export class SummaryCard {
  title = input.required<SummaryCardData['title']>();
  value = input.required<SummaryCardData['value']>();
}
