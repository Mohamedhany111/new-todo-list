import { Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { InputComponent } from './pages/input/input.component';
import { PersonsComponent } from './pages/persons/persons.component';

export const routes: Routes = [
    {path:'input' ,component:InputComponent },
    {path:'todo' , component:TodoComponent},
    {path:'persons' , component:PersonsComponent},
];
