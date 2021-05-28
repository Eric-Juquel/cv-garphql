import { queryType } from '@nexus/schema';
import { data } from 'src/data';
import { Bio } from './index';

export const Query = queryType({
  definition(t) {
    // t.string('name', {resolve: () => 'Eric'});
    t.field('bio', {
      type: Bio,
      resolve: () => data.bio,
    });
  },
});
