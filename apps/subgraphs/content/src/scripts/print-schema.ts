import { writeFileSync } from 'fs';
import { printSchema } from 'graphql';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { typeDefs } from '../schema';
import {resolvers} from '../resolvers';

try {
  const schema = buildSubgraphSchema([{ typeDefs, resolvers }]);
  const sdl = printSchema(schema);
  writeFileSync('schema.graphql', sdl);
  console.log('✅ content schema.graphql generated');
} catch (err) {
  console.error('❌ Failed to generate schema', err);
  process.exit(1); 
}