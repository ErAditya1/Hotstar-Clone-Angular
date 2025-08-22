import { Routes } from '@angular/router';
import { PublicLayout } from './layouts/public-layout/public-layout';
import { Home } from './pages/home/home';
import { Search } from './pages/search/search';
import { Shows } from './pages/shows/shows';
import { Movies } from './pages/movies/movies';
import { Sports } from './pages/sports/sports';
import { Creators } from './pages/creators/creators';
import { Categories } from './pages/categories/categories';
import { User } from './pages/user/user';

export const routes: Routes = [
    {
        path: "",
        component: PublicLayout,
        children: [
            { path: "", component: Home },
            { path: "search", component: Search },
            { path: "shows", component: Shows },
            { path: "movies", component: Movies },
            { path: "sports", component: Sports },
            { path: "creators", component: Creators },
            { path: "categories", component: Categories },
            { path: "user", component: User },
           
            
        ]
    }
];
