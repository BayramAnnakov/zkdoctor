import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { MeshHTTPHandler } from '@graphql-mesh/http';
import { ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import type { ZkDoctorTypes } from './sources/zkDoctor/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BigDecimal: any;
    BigInt: any;
    Bytes: any;
    Int8: any;
};
export type BlockChangedFilter = {
    number_gte: Scalars['Int'];
};
export type Block_height = {
    hash?: InputMaybe<Scalars['Bytes']>;
    number?: InputMaybe<Scalars['Int']>;
    number_gte?: InputMaybe<Scalars['Int']>;
};
export type InsurancePolicyClaimed = {
    id: Scalars['Bytes'];
    zkDoctor_id: Scalars['BigInt'];
    amount: Scalars['BigInt'];
    claimDate: Scalars['BigInt'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type InsurancePolicyClaimed_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    zkDoctor_id?: InputMaybe<Scalars['BigInt']>;
    zkDoctor_id_not?: InputMaybe<Scalars['BigInt']>;
    zkDoctor_id_gt?: InputMaybe<Scalars['BigInt']>;
    zkDoctor_id_lt?: InputMaybe<Scalars['BigInt']>;
    zkDoctor_id_gte?: InputMaybe<Scalars['BigInt']>;
    zkDoctor_id_lte?: InputMaybe<Scalars['BigInt']>;
    zkDoctor_id_in?: InputMaybe<Array<Scalars['BigInt']>>;
    zkDoctor_id_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    claimDate?: InputMaybe<Scalars['BigInt']>;
    claimDate_not?: InputMaybe<Scalars['BigInt']>;
    claimDate_gt?: InputMaybe<Scalars['BigInt']>;
    claimDate_lt?: InputMaybe<Scalars['BigInt']>;
    claimDate_gte?: InputMaybe<Scalars['BigInt']>;
    claimDate_lte?: InputMaybe<Scalars['BigInt']>;
    claimDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
    claimDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<InsurancePolicyClaimed_filter>>>;
    or?: InputMaybe<Array<InputMaybe<InsurancePolicyClaimed_filter>>>;
};
export type InsurancePolicyClaimed_orderBy = 'id' | 'zkDoctor_id' | 'amount' | 'claimDate' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
export type InsurancePolicyCreated = {
    id: Scalars['Bytes'];
    zkDoctor_id: Scalars['BigInt'];
    amount: Scalars['BigInt'];
    premium: Scalars['BigInt'];
    startDate: Scalars['BigInt'];
    endDate: Scalars['BigInt'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type InsurancePolicyCreated_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    zkDoctor_id?: InputMaybe<Scalars['BigInt']>;
    zkDoctor_id_not?: InputMaybe<Scalars['BigInt']>;
    zkDoctor_id_gt?: InputMaybe<Scalars['BigInt']>;
    zkDoctor_id_lt?: InputMaybe<Scalars['BigInt']>;
    zkDoctor_id_gte?: InputMaybe<Scalars['BigInt']>;
    zkDoctor_id_lte?: InputMaybe<Scalars['BigInt']>;
    zkDoctor_id_in?: InputMaybe<Array<Scalars['BigInt']>>;
    zkDoctor_id_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    premium?: InputMaybe<Scalars['BigInt']>;
    premium_not?: InputMaybe<Scalars['BigInt']>;
    premium_gt?: InputMaybe<Scalars['BigInt']>;
    premium_lt?: InputMaybe<Scalars['BigInt']>;
    premium_gte?: InputMaybe<Scalars['BigInt']>;
    premium_lte?: InputMaybe<Scalars['BigInt']>;
    premium_in?: InputMaybe<Array<Scalars['BigInt']>>;
    premium_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    startDate?: InputMaybe<Scalars['BigInt']>;
    startDate_not?: InputMaybe<Scalars['BigInt']>;
    startDate_gt?: InputMaybe<Scalars['BigInt']>;
    startDate_lt?: InputMaybe<Scalars['BigInt']>;
    startDate_gte?: InputMaybe<Scalars['BigInt']>;
    startDate_lte?: InputMaybe<Scalars['BigInt']>;
    startDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
    startDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    endDate?: InputMaybe<Scalars['BigInt']>;
    endDate_not?: InputMaybe<Scalars['BigInt']>;
    endDate_gt?: InputMaybe<Scalars['BigInt']>;
    endDate_lt?: InputMaybe<Scalars['BigInt']>;
    endDate_gte?: InputMaybe<Scalars['BigInt']>;
    endDate_lte?: InputMaybe<Scalars['BigInt']>;
    endDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
    endDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<InsurancePolicyCreated_filter>>>;
    or?: InputMaybe<Array<InputMaybe<InsurancePolicyCreated_filter>>>;
};
export type InsurancePolicyCreated_orderBy = 'id' | 'zkDoctor_id' | 'amount' | 'premium' | 'startDate' | 'endDate' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc';
export type OwnershipTransferred = {
    id: Scalars['Bytes'];
    previousOwner: Scalars['Bytes'];
    newOwner: Scalars['Bytes'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type OwnershipTransferred_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    previousOwner?: InputMaybe<Scalars['Bytes']>;
    previousOwner_not?: InputMaybe<Scalars['Bytes']>;
    previousOwner_gt?: InputMaybe<Scalars['Bytes']>;
    previousOwner_lt?: InputMaybe<Scalars['Bytes']>;
    previousOwner_gte?: InputMaybe<Scalars['Bytes']>;
    previousOwner_lte?: InputMaybe<Scalars['Bytes']>;
    previousOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
    previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    previousOwner_contains?: InputMaybe<Scalars['Bytes']>;
    previousOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
    newOwner?: InputMaybe<Scalars['Bytes']>;
    newOwner_not?: InputMaybe<Scalars['Bytes']>;
    newOwner_gt?: InputMaybe<Scalars['Bytes']>;
    newOwner_lt?: InputMaybe<Scalars['Bytes']>;
    newOwner_gte?: InputMaybe<Scalars['Bytes']>;
    newOwner_lte?: InputMaybe<Scalars['Bytes']>;
    newOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
    newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    newOwner_contains?: InputMaybe<Scalars['Bytes']>;
    newOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OwnershipTransferred_filter>>>;
    or?: InputMaybe<Array<InputMaybe<OwnershipTransferred_filter>>>;
};
export type OwnershipTransferred_orderBy = 'id' | 'previousOwner' | 'newOwner' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
export type Query = {
    insurancePolicyClaimed?: Maybe<InsurancePolicyClaimed>;
    insurancePolicyClaimeds: Array<InsurancePolicyClaimed>;
    insurancePolicyCreated?: Maybe<InsurancePolicyCreated>;
    insurancePolicyCreateds: Array<InsurancePolicyCreated>;
    ownershipTransferred?: Maybe<OwnershipTransferred>;
    ownershipTransferreds: Array<OwnershipTransferred>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
};
export type QueryinsurancePolicyClaimedArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryinsurancePolicyClaimedsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<InsurancePolicyClaimed_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<InsurancePolicyClaimed_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryinsurancePolicyCreatedArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryinsurancePolicyCreatedsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<InsurancePolicyCreated_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<InsurancePolicyCreated_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryownershipTransferredArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryownershipTransferredsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<OwnershipTransferred_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<OwnershipTransferred_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type Query_metaArgs = {
    block?: InputMaybe<Block_height>;
};
export type Subscription = {
    insurancePolicyClaimed?: Maybe<InsurancePolicyClaimed>;
    insurancePolicyClaimeds: Array<InsurancePolicyClaimed>;
    insurancePolicyCreated?: Maybe<InsurancePolicyCreated>;
    insurancePolicyCreateds: Array<InsurancePolicyCreated>;
    ownershipTransferred?: Maybe<OwnershipTransferred>;
    ownershipTransferreds: Array<OwnershipTransferred>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
};
export type SubscriptioninsurancePolicyClaimedArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptioninsurancePolicyClaimedsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<InsurancePolicyClaimed_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<InsurancePolicyClaimed_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptioninsurancePolicyCreatedArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptioninsurancePolicyCreatedsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<InsurancePolicyCreated_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<InsurancePolicyCreated_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionownershipTransferredArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionownershipTransferredsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<OwnershipTransferred_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<OwnershipTransferred_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type Subscription_metaArgs = {
    block?: InputMaybe<Block_height>;
};
export type _Block_ = {
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>;
    /** The block number */
    number: Scalars['Int'];
    /** Integer representation of the timestamp stored in blocks for the chain */
    timestamp?: Maybe<Scalars['Int']>;
};
/** The type for the top-level _meta field */
export type _Meta_ = {
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     *
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean'];
};
export type _SubgraphErrorPolicy_ = 
/** Data will be returned even if the subgraph has indexing errors */
'allow'
/** If the subgraph has indexing errors, data will be omitted. The default. */
 | 'deny';
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;
export type ResolverTypeWrapper<T> = Promise<T> | T;
export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
    selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>;
export type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export type NextResolverFn<T> = () => Promise<T>;
export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
    BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
    BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
    BlockChangedFilter: BlockChangedFilter;
    Block_height: Block_height;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
    Float: ResolverTypeWrapper<Scalars['Float']>;
    ID: ResolverTypeWrapper<Scalars['ID']>;
    InsurancePolicyClaimed: ResolverTypeWrapper<InsurancePolicyClaimed>;
    InsurancePolicyClaimed_filter: InsurancePolicyClaimed_filter;
    InsurancePolicyClaimed_orderBy: InsurancePolicyClaimed_orderBy;
    InsurancePolicyCreated: ResolverTypeWrapper<InsurancePolicyCreated>;
    InsurancePolicyCreated_filter: InsurancePolicyCreated_filter;
    InsurancePolicyCreated_orderBy: InsurancePolicyCreated_orderBy;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    Int8: ResolverTypeWrapper<Scalars['Int8']>;
    OrderDirection: OrderDirection;
    OwnershipTransferred: ResolverTypeWrapper<OwnershipTransferred>;
    OwnershipTransferred_filter: OwnershipTransferred_filter;
    OwnershipTransferred_orderBy: OwnershipTransferred_orderBy;
    Query: ResolverTypeWrapper<{}>;
    String: ResolverTypeWrapper<Scalars['String']>;
    Subscription: ResolverTypeWrapper<{}>;
    _Block_: ResolverTypeWrapper<_Block_>;
    _Meta_: ResolverTypeWrapper<_Meta_>;
    _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;
/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
    BigDecimal: Scalars['BigDecimal'];
    BigInt: Scalars['BigInt'];
    BlockChangedFilter: BlockChangedFilter;
    Block_height: Block_height;
    Boolean: Scalars['Boolean'];
    Bytes: Scalars['Bytes'];
    Float: Scalars['Float'];
    ID: Scalars['ID'];
    InsurancePolicyClaimed: InsurancePolicyClaimed;
    InsurancePolicyClaimed_filter: InsurancePolicyClaimed_filter;
    InsurancePolicyCreated: InsurancePolicyCreated;
    InsurancePolicyCreated_filter: InsurancePolicyCreated_filter;
    Int: Scalars['Int'];
    Int8: Scalars['Int8'];
    OwnershipTransferred: OwnershipTransferred;
    OwnershipTransferred_filter: OwnershipTransferred_filter;
    Query: {};
    String: Scalars['String'];
    Subscription: {};
    _Block_: _Block_;
    _Meta_: _Meta_;
}>;
export type entityDirectiveArgs = {};
export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type subgraphIdDirectiveArgs = {
    id: Scalars['String'];
};
export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type derivedFromDirectiveArgs = {
    field: Scalars['String'];
};
export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
    name: 'BigDecimal';
}
export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
    name: 'BigInt';
}
export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
    name: 'Bytes';
}
export type InsurancePolicyClaimedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InsurancePolicyClaimed'] = ResolversParentTypes['InsurancePolicyClaimed']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    zkDoctor_id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    claimDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type InsurancePolicyCreatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InsurancePolicyCreated'] = ResolversParentTypes['InsurancePolicyCreated']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    zkDoctor_id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    premium?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    startDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    endDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
    name: 'Int8';
}
export type OwnershipTransferredResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OwnershipTransferred'] = ResolversParentTypes['OwnershipTransferred']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    previousOwner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    newOwner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
    insurancePolicyClaimed?: Resolver<Maybe<ResolversTypes['InsurancePolicyClaimed']>, ParentType, ContextType, RequireFields<QueryinsurancePolicyClaimedArgs, 'id' | 'subgraphError'>>;
    insurancePolicyClaimeds?: Resolver<Array<ResolversTypes['InsurancePolicyClaimed']>, ParentType, ContextType, RequireFields<QueryinsurancePolicyClaimedsArgs, 'skip' | 'first' | 'subgraphError'>>;
    insurancePolicyCreated?: Resolver<Maybe<ResolversTypes['InsurancePolicyCreated']>, ParentType, ContextType, RequireFields<QueryinsurancePolicyCreatedArgs, 'id' | 'subgraphError'>>;
    insurancePolicyCreateds?: Resolver<Array<ResolversTypes['InsurancePolicyCreated']>, ParentType, ContextType, RequireFields<QueryinsurancePolicyCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
    ownershipTransferred?: Resolver<Maybe<ResolversTypes['OwnershipTransferred']>, ParentType, ContextType, RequireFields<QueryownershipTransferredArgs, 'id' | 'subgraphError'>>;
    ownershipTransferreds?: Resolver<Array<ResolversTypes['OwnershipTransferred']>, ParentType, ContextType, RequireFields<QueryownershipTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
    _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;
export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
    insurancePolicyClaimed?: SubscriptionResolver<Maybe<ResolversTypes['InsurancePolicyClaimed']>, "insurancePolicyClaimed", ParentType, ContextType, RequireFields<SubscriptioninsurancePolicyClaimedArgs, 'id' | 'subgraphError'>>;
    insurancePolicyClaimeds?: SubscriptionResolver<Array<ResolversTypes['InsurancePolicyClaimed']>, "insurancePolicyClaimeds", ParentType, ContextType, RequireFields<SubscriptioninsurancePolicyClaimedsArgs, 'skip' | 'first' | 'subgraphError'>>;
    insurancePolicyCreated?: SubscriptionResolver<Maybe<ResolversTypes['InsurancePolicyCreated']>, "insurancePolicyCreated", ParentType, ContextType, RequireFields<SubscriptioninsurancePolicyCreatedArgs, 'id' | 'subgraphError'>>;
    insurancePolicyCreateds?: SubscriptionResolver<Array<ResolversTypes['InsurancePolicyCreated']>, "insurancePolicyCreateds", ParentType, ContextType, RequireFields<SubscriptioninsurancePolicyCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
    ownershipTransferred?: SubscriptionResolver<Maybe<ResolversTypes['OwnershipTransferred']>, "ownershipTransferred", ParentType, ContextType, RequireFields<SubscriptionownershipTransferredArgs, 'id' | 'subgraphError'>>;
    ownershipTransferreds?: SubscriptionResolver<Array<ResolversTypes['OwnershipTransferred']>, "ownershipTransferreds", ParentType, ContextType, RequireFields<SubscriptionownershipTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
    _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;
export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
    hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
    number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
    block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
    deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type Resolvers<ContextType = MeshContext> = ResolversObject<{
    BigDecimal?: GraphQLScalarType;
    BigInt?: GraphQLScalarType;
    Bytes?: GraphQLScalarType;
    InsurancePolicyClaimed?: InsurancePolicyClaimedResolvers<ContextType>;
    InsurancePolicyCreated?: InsurancePolicyCreatedResolvers<ContextType>;
    Int8?: GraphQLScalarType;
    OwnershipTransferred?: OwnershipTransferredResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    Subscription?: SubscriptionResolvers<ContextType>;
    _Block_?: _Block_Resolvers<ContextType>;
    _Meta_?: _Meta_Resolvers<ContextType>;
}>;
export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
    entity?: entityDirectiveResolver<any, any, ContextType>;
    subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
    derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;
export type MeshContext = ZkDoctorTypes.Context & BaseMeshContext;
export declare const rawServeConfig: YamlConfig.Config['serve'];
export declare function getMeshOptions(): Promise<GetMeshOptions>;
export declare function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext>;
export declare function getBuiltGraphClient(): Promise<MeshInstance>;
export declare const execute: ExecuteMeshFn;
export declare const subscribe: SubscribeMeshFn;
export declare function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext): {
    PoliciesCreatedQuery(variables?: Exact<{
        [key: string]: never;
    }>, options?: TOperationContext): Promise<PoliciesCreatedQueryQuery>;
};
export type PoliciesCreatedQueryQueryVariables = Exact<{
    [key: string]: never;
}>;
export type PoliciesCreatedQueryQuery = {
    insurancePolicyCreateds: Array<Pick<InsurancePolicyCreated, 'id' | 'zkDoctor_id' | 'amount' | 'premium'>>;
};
export declare const PoliciesCreatedQueryDocument: DocumentNode<PoliciesCreatedQueryQuery, Exact<{
    [key: string]: never;
}>>;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>;
export declare function getSdk<C, E>(requester: Requester<C, E>): {
    PoliciesCreatedQuery(variables?: PoliciesCreatedQueryQueryVariables, options?: C): Promise<PoliciesCreatedQueryQuery>;
};
export type Sdk = ReturnType<typeof getSdk>;
