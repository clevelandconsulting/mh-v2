angular.module('app').service 'PlanStorageService', [ 'StorageService', 'ModelStorageService', 'plan', 'strategy', 'tactic', (StorageService, ModelStorageService, plan, strategy, tactic) -> 
 class PlanStorageService extends ModelStorageService
  constructor : -> 
   super(StorageService, 'plans', 2400*60)   

  getById: (id) ->
   raw = super(id)
   #console.log 'raw',raw
   if raw?
    p = new plan raw.data,raw.href,raw.recordID
    for raw_strategy in raw.strategies
     s = new strategy raw_strategy.data, raw_strategy.href, raw_strategy.recordID
     for raw_tactic in raw_strategy.tactics
      t = new tactic raw_tactic.data, raw_tactic.href, raw_tactic.recordID
      s.addTactic t
     p.addStrategy s
    return p
   else
    return raw
 
 new PlanStorageService()

]