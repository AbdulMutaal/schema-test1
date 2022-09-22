import { useState, useEffect } from 'react';
import { octokit } from './octo.ts';

export const useGetSchema = () => {
  const [schema, setSchema] = useState({});

  useEffect(() => {
    async function onLoad() {
      await octokit.request(
        'GET /repos/{owner}/{repo}/contents/assets/schema/ensemble_schema.json', {
          owner: 'EnsembleUI',
          repo: 'ensemble',
      }).then(res => {
        const encoded = res.data.content;
        const decoded = atob(encoded);
        setSchema({
          uri: 'https://raw.githubusercontent.com/EnsembleUI/ensemble/main/assets/schema/ensemble_schema.json',
          fileMatch: ['*'],
          schema: JSON.parse(decoded)
        });
      }).catch(err => console.log(err));
    }

    onLoad();
  },[])

  return schema;
};