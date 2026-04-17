import { Route, Routes } from "@angular/router";
import { Add } from "./components/add/add";
import { Main } from "./components/main/main";
import { Home } from "./components/home/home";
import { Update } from "./components/update/update";
import { List } from "./components/list/list";

export const routes:Routes = [
    {path:'', component:Home},
    {path:'home', component:Home},
    { path:'login', component:Main},
    {path:'signup', component:Add},
    {path:'update', component:Update},
    {path:'list', component:List}
]