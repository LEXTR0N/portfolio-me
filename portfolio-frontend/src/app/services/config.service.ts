// src/app/services/config.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface PersonalConfig {
  name: string;
  role: string;
  tagline: string;
  birthdate: string;
  contact: {
    email: string;
    location: string;
    social: {
      github: { username: string; url: string };
      xing: { username: string; url: string };
      linkedin: { username: string; url: string };
      behance: { username: string; url: string };
    }
  };
  images: {
    profile: string;
    logoLight: string;
    logoDark: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = 'assets/config.json';
  private configData: PersonalConfig | null = null;
  private configSubject = new BehaviorSubject<PersonalConfig | null>(null);
  
  config$ = this.configSubject.asObservable();
  
  constructor(private http: HttpClient) { }
  
  loadConfig(): Observable<PersonalConfig> {
    return this.http.get<PersonalConfig>(this.configUrl).pipe(
      tap(config => {
        this.configData = config;
        this.configSubject.next(config);
      })
    );
  }
  
  getConfig(): PersonalConfig | null {
    return this.configData;
  }
}