import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { AppComponent } from './app.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "addition", component: AdditionComponent },
  { path: "subtraction", component: SubtractionComponent },
  { path: "multiply", component: MultiplyComponent },
  { path: "comparison", component: ComparisonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
