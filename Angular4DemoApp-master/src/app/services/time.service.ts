export class TimeService {

  subscribe(callback: (time: Date) => void) {
    callback(new Date());
    setInterval(() => callback(new Date()), 1000);
  }

}
