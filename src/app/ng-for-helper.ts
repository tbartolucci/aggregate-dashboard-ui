export class NgForHelper {

  getKeys(obj): string[] {
    return Object.keys(obj);
  }

  getClass(obj): string{
    if ( obj.good === true ) {
      return 'bg-success';
    } else if ( obj.good === false ) {
      return 'bg-danger';
    } else {
      return 'bg-neutral';
    }
  }
}
