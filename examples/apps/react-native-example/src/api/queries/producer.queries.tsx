import { useQuery } from "@tanstack/react-query";
import { GetProducerWithCountResponse } from "../../../packages/axios-module/src/endpoints/producer/res/get-producer-with-count.res";
import { QueryParameterConfigType } from "../../types/query-parameter-config.type";
import { producerServices } from "..";


export const useGetProducersWithStartQuery = (config: QueryParameterConfigType<{
    start: number;
}>) => {
    const {setErrors, query, lastUpdatedAt} = config;
    const { start } = config.query;
    return useQuery(
        [`useGetProducersWithStart${query ? query : ''}${lastUpdatedAt? lastUpdatedAt : ''}${start}`],
        () =>
            producerServices
                .getProducersWithStart(start)
                .then((res) => res.data)
                .catch((err) => {
                    throw err;
                }),
        {
            onError: (err: any) => {
                if(setErrors && typeof setErrors === 'function'){
                    setErrors({ message: err.toString() }, `getApiStatusQuery`);
                }
            },
            onSuccess(data) {
                // console.log(data, 'this is data for herb query')
            }
        }
    );
};




export const useGetProducerLogoQuery = (config: QueryParameterConfigType<{
    producerHandle: string;
}>) => {
    const {setErrors, query, enabled} = config;
    const { producerHandle } = config.query;
    return useQuery(
        [`useGetProducerLogoQuery${query ? query : ''}${producerHandle}`],
        () =>
            producerServices
                .getProducerLogo(producerHandle)
                .then((res) => res.data)
                .catch((err) => {
                    throw err;
                }),
        {
            onError: (err: any) => {
                if(setErrors && typeof setErrors === 'function'){
                    setErrors({ message: err.toString() }, `getApiStatusQuery`);
                }
            },
            onSuccess(data) {
                // console.log(data, 'this is data for herb query')
            },
            enabled: enabled
        }
        
    );
};


export const useGetProducerCoverPhotoQuery = (config: QueryParameterConfigType<{
    producerHandle: string;
}>) => {
    const {setErrors, query, enabled} = config;
    const { producerHandle } = config.query;
    return useQuery(
        [`useGetProducerCoverPhotoQuery${query ? query : ''}${producerHandle}`],
        () =>
            producerServices
                .getProducerCoverPhoto(producerHandle)
                .then((res) => res.data)
                .catch((err) => {
                    throw err;
                }),
        {
            onError: (err: any) => {
                if(setErrors && typeof setErrors === 'function'){
                    setErrors({ message: err.toString() }, `getApiStatusQuery`);
                }
            },
            onSuccess(data) {
                // console.log(data, 'this is data for herb query')
            },
            enabled: enabled
        }
        
    );
};
