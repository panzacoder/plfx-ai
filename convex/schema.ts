import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  users: defineTable({
    userId: v.string(),
    email: v.string(),
    subscriptionId: v.optional(v.string()),
    endsOn: v.optional(v.number()),
    credits: v.number(),
    name: v.optional(v.string()),
    isAdmin: v.optional(v.boolean()),
    profileImage: v.optional(v.string()),
    isPremium: v.optional(v.boolean())
  })
    .index('by_userId', ['userId'])
    .index('by_subscriptionId', ['subscriptionId']),
  organizations: defineTable({
    name: v.string(),
    ownerId: v.id('users'),
    members: v.array(v.id('users'))
  }).index('by_ownerId', ['ownerId']),
  ai_providers: defineTable({
    organizationId: v.id('organizations'),
    type: v.literal('OpenAI'),
    api_key: v.string()
  }).index('by_organizationId', ['organizationId']),
  assistants: defineTable({
    aiProviderId: v.id('ai_providers'),
    openAiAssistantId: v.string()
  }).index('by_aiProviderId', ['aiProviderId'])
})
