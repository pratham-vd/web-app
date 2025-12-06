import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

export interface RiskResult {
  level: 'Low' | 'Medium' | 'High' | 'Unknown';
  color: 'green' | 'yellow' | 'red' | 'gray';
  reasoning: string;
  score?: number; // Optional repayment rate
}

@Component({
  selector: 'mifosx-risk-check-dialog',
  templateUrl: './risk-check-dialog.component.html',
  styleUrls: ['./risk-check-dialog.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class RiskCheckDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RiskCheckDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { risk: RiskResult; clientName: string }
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
