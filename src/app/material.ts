import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatGridListModule, 
  MatSnackBarModule, MatListModule, MatSelectModule, MatTabsModule, MatPaginatorModule,
  MatExpansionModule
} from '@angular/material';
@NgModule({
  imports: [
  CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatSnackBarModule,
  MatSelectModule,
  MatListModule,
  MatTabsModule,
  MatPaginatorModule,
  MatExpansionModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatGridListModule,
   MatSnackBarModule,
   MatSelectModule,
   MatListModule,
   MatTabsModule,
   MatPaginatorModule,
   MatExpansionModule
   ],
})
export class MaterialModule {

}