import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'application'
})
export class ApplicationPipe implements PipeTransform {
  // pipe for search the loan applications details
  transform(application: any[], applicationSearch): any[] {
    if (applicationSearch) {
      return application.filter(app => {
        return app.UserName.toLowerCase().includes(applicationSearch.toLowerCase())
          || app.LoanType.toLowerCase().includes(applicationSearch.toLowerCase())
          || app.AppStatus.toLowerCase().includes(applicationSearch.toLowerCase())
      });
    }
    else {
      return application;
    }
  }
}
