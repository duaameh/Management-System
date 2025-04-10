import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hiddenPass',
  standalone:false
})
export class HiddenPassPipe implements PipeTransform {

  transform(value:string , code :string , showCharNO:number =0): unknown {
    const arrayValue= value.split('');
    return !showCharNO ? arrayValue.fill(code).join('') :
    arrayValue.slice(0, showCharNO).join('') + arrayValue.slice(showCharNO).fill(code).join('');
  }

}
