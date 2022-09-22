import React, { useState, useEffect, useRef } from 'react';

import { useGetSchema } from './useSchema.ts';
import $ from 'jquery';
import $RefParser from "@apidevtools/json-schema-ref-parser";


const EditorCode = () => {
    const schema = useGetSchema();

    useEffect(() => {

        if(schema) {
            getSchema(schema);
        }

        

    }, [schema])

    const getSchema = async (sch) => {
        try {
            let schema90 = await $RefParser.dereference(sch);
            console.log(schema90);
        }
            catch(err) {
            console.error(err);
        }

    }

}

export default EditorCode;