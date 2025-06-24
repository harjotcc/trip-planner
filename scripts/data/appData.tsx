type TripData = {
  source: string;
  destination: string;
  amount: string;
  contribution: string;
  note: string;
  date: string;
  members: string;   
};

let tripData: TripData | null = null;
let username: string = '';

export function saveTripData(data: TripData) {
  tripData = data;
}

export function getTripData(): TripData | null {
  return tripData;
}

export function setUsername(name: string) {
  username = name;
}

export function getUsername(): string {
  return username;
}