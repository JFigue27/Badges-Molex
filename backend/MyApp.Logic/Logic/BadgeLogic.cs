using MyApp.Logic.Entities;
using Reusable.Attachments;
using Reusable.CRUD.Contract;
using Reusable.CRUD.Entities;
using Reusable.CRUD.Implementations.SS;
using Reusable.CRUD.JsonEntities;
using Reusable.EmailServices;
using Reusable.Rest;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.OrmLite;
using ServiceStack.Web;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

///start:slot:imports<<<///end:slot:imports<<<

namespace MyApp.Logic
{
    public class BadgeLogic : LogicWrite<Badge>, ILogicWriteAsync<Badge>
    {
        ///start:slot:init<<<///end:slot:init<<<

        ///start:slot:ctor<<<///end:slot:ctor<<<

        protected override Badge OnCreateInstance(Badge entity)
        {
            
            ///start:slot:createInstance<<<///end:slot:createInstance<<<

            return entity;
        }

        protected override SqlExpression<Badge> OnGetList(SqlExpression<Badge> query)
        {
            
            ///start:slot:listQuery<<<///end:slot:listQuery<<<

            return query;
        }

        protected override SqlExpression<Badge> OnGetSingle(SqlExpression<Badge> query)
        {
            
            ///start:slot:singleQuery<<<///end:slot:singleQuery<<<

            return query;
        }

        protected override void OnBeforeSaving(Badge entity, OPERATION_MODE mode = OPERATION_MODE.NONE)
        {
            
            ///start:slot:beforeSave<<<
			if (string.IsNullOrWhiteSpace(entity.Value))
			{
				throw new KnownError("El campo no puede ir sin data");
			}
			///end:slot:beforeSave<<<
        }

        protected override void OnAfterSaving(Badge entity, OPERATION_MODE mode = OPERATION_MODE.NONE)
        {
            
            ///start:slot:afterSave<<<
			
			///end:slot:afterSave<<<
        }

        protected override void OnBeforeRemoving(Badge entity)
        {
            
            ///start:slot:beforeRemove<<<///end:slot:beforeRemove<<<
        }

        protected override IEnumerable<Badge> AdapterOut(params Badge[] entities)
        {
            ///start:slot:adapterOut<<<
			
			///end:slot:adapterOut<<<

            foreach (var item in entities)
            {
                
            }

            return entities;
        }

        
        ///start:slot:logic<<<
		public void CheckOut(string Value)
		{
			Db.Update<Badge>(new 
			{
				CheckOut = DateTimeOffset.Now
			}, e => e.Value == Value);
			Cache.FlushAll();
			
		}
		///end:slot:logic<<<
    }
}
