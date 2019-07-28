import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
          name: 'convertTospace'
})
export class convertTospace implements PipeTransform {
          
  transform(value: string,fromReplace: string,toReplace: string = ' '): string{
            return value.replace(fromReplace,toReplace);
  }

}