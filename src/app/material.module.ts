import { NgModule } from "@angular/core";

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule, MatInputModule, MatFormFieldModule,
  MatSliderModule, MatCheckboxModule, MatDatepickerModule,
  MatRadioModule, MatIconModule, MatButtonModule, 
  MatCardModule, MatListModule, MatSelectModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

const MODULE = [
  FlexLayoutModule,
  MatToolbarModule, MatInputModule, MatFormFieldModule,
  MatSliderModule, MatCheckboxModule, MatRadioModule,
  MatDatepickerModule, MatMomentDateModule, MatIconModule,
  MatButtonModule, MatCardModule, MatListModule, MatSelectModule
]

@NgModule({
  imports: MODULE,
  exports: MODULE,
})
export class MaterialModule { }
