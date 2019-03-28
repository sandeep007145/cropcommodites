import { Component, OnInit } from '@angular/core';
import { CropcommodityService } from '../../cropcommodity/cropcommodity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public crops = [];
  public conditionChecker = {};
  public treeViewer = {};
  constructor(
    private cropService: CropcommodityService
  ) { }

  ngOnInit() {
    this.getCropsFromServer();
  }

  getCropsFromServer() {
    this.cropService.getCrops().subscribe(res => {
      this.crops = res;
      this.conditionChecker['from'] = 'Data from server.';
    }, err => {
      // tslint:disable-next-line:max-line-length
      alert('Failed to get data from server(please run command `nodemon app.js` after npm install in server folder to get data from server), else will fetch from local!');
      this.getCropsFromLocal();
    });
  }

  getCropsFromLocal() {
    this.cropService.getCropsFromLocal().subscribe(res => {
      this.conditionChecker['from'] = 'Data from local.';
      this.crops = res;
    });
  }

  openAndCloseCrop(croprs, signCheck) {
    signCheck === 'open' ? this.conditionChecker['open'] = true : this.conditionChecker['open'] = false;
  }

  firstLevel(childName, signcheck, index) {
    this.crops['children'].map(check => {
      if (check.show) {
        check.show = false;
      } else {
        return true;
      }
    });
    signcheck === 'open' ? this.crops['children'][index].show = true : this.crops['children'][index].show = false;
    this.crops['termsrelation'].map(secondChild => {
      if (secondChild.name === childName) {
        if (secondChild.terms) {
          this.treeViewer['secondlevel'] = secondChild.terms;
        }
      }
    });
  }

  secondLevelfunc(grandchildName, signCheck, index) {
    this.treeViewer['secondlevel'].map(check => {
      if (check.show) {
        check.show = false;
      } else {
        return true;
      }
    });
    signCheck === 'open' ? this.treeViewer['secondlevel'][index].show = true : this.treeViewer['secondlevel'][index].show = false;
    this.treeViewer['secondlevel'].map(thirdChild => {
      if (thirdChild.name === grandchildName) {
        if (thirdChild.termsrelation) {
          this.treeViewer['thirdLevel'] = thirdChild.termsrelation;
        } else {
          this.treeViewer['thirdLevel'] = [];
        }
      }
    });
    console.log(this.crops);
  }

  thirdlevelfun(grandGrandchildName, signCheck, index) {
    this.treeViewer['thirdLevel'].map(check => {
      if (check.show) {
        check.show = false;
      } else {
        return true;
      }
    });
    signCheck === 'open' ? this.treeViewer['thirdLevel'][index].show = true : this.treeViewer['thirdLevel'][index].show = false;
    this.treeViewer['thirdLevel'].map(fourthChild => {
      if (fourthChild.rel === grandGrandchildName) {
        if (fourthChild.terms) {
          this.treeViewer['fourthLevel'] = fourthChild.terms;
        } else {
          this.treeViewer['fourthLevel'] = [];
        }
      }
    });
  }

}
