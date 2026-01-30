import { writeFileSync } from 'fs';
import { printSchema } from 'graphql';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { typeDefs } from '../graphql/schemas';
import {resolvers} from '../graphql/resolvers';

const schema = buildSubgraphSchema([{ typeDefs, resolvers }]);
const sdl = printSchema(schema);

writeFileSync('schema.graphql', sdl);
console.log('✅ products subgraph schema.graphql generated');
