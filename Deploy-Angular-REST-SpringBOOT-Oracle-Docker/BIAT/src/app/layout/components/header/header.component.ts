import { Component, OnInit, Input,  HostListener } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../../../model/model.user';
import { AuthService } from '../../../../services/auth.service';
import { ProduitsService } from '../../../../services/produits.service';
import { Produit } from '../../../../model/model.produit';
import { BlankPageComponent } from '../../blank-page/blank-page.component';
import { DataSharingService } from '../../../../services/data-sharing.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PaysService } from '../../../../services/pays.service';
import { Pays } from '../../../../model/model.pays';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
    currentUser:User;
    pageProduits:any;
    produit:Produit=new Produit();
    referenceProd : number;
    path:String;
    pathPage:String;
    href:String;
    hrefPage:String;
    session : String;
    referenceInput:number=0;
    reference:number=0;
    URL : String;
    pagePays:any;
    pays:Pays[];
    paysNew:Pays;
    selectedId: number;
    produit$: Observable<Produit>
    errorMessage:string;


    constructor(public authService: AuthService,
        public produitsService:ProduitsService,public paysService:PaysService,
         private translate: TranslateService, public router: Router,
         public activatedRoute:ActivatedRoute,private serviceSharing:DataSharingService) {

        this.currentUser=JSON.parse(localStorage.getItem('currentUser'))

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {

    }

      onEditProduit_Ref(reference:number){
          let blankPage= new BlankPageComponent(this.paysService,this.produitsService,this.router,
            this.activatedRoute,this.serviceSharing);

        //Normlement récupérer le nouveau Id
        this.serviceSharing.newId(this.reference);

        this.router.navigate(['/blank-page',reference]);
        if(location.pathname!=="/dashboard"){
        //this.getData();
        blankPage.getData(reference);
        //blankPage.ngOnInit();
        //this.serviceSharing.newProd(this.produit);
        //this.serviceSharing.newPays(this.pays);
        /** Teb3a Details kima : https://stackblitz.com/angular/jrvejpovgaj?file=src%2Fapp%2Fcrisis-center%2Fcrisis-detail.component.ts */
        /*this.produit$=this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) =>
        {this.reference =+ params.get('reference')
       return this.produitsService.getProduitByRef(this.reference);
       }) );*/
      // this.serviceSharing.newProd(this.produit);
      // this.serviceSharing.newPays(this.paysNew);
             console.log("Ref2 :"+JSON.stringify(this.reference));


        }




        }



    onEditProduit(reference){
        this.router.navigate(['/produits-new',reference]);
      }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    // login out from the app
  logOut() {
    this.authService.logOut()

          this.router.navigate(['/login']);

  }

  @Input() sideBar: SidebarComponent;

  @HostListener('click')
  click() {
    this.sideBar.toggle();
  }
}
