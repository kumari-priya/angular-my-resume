import { Injectable } from '@angular/core';

import { Experience } from './experience';
import { EXPERIENCE } from './data-experience';

@Injectable()

  /*export class ExperienceService {
  getExperience(): Promise<Experience[]> {
    return Promise.resolve(EXPERIENCE);
  }*/

  export class ExperienceService {
  getExperience(): Experience[] {
    return EXPERIENCE;
    /*[
      {role: 'Lead Developer',
      company: 'Startup Hubs',
      location: 'San Francisco',
      duration: '2015 - Present',
      summary: 'Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.'
    },

    {role: 'Developer',
    company: 'Startup',
    location: 'New Delhi',
    duration: '2013 - 2015',
    summary: 'Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.'
    },

  ];*/
  }
}
