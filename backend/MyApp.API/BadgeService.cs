using MyApp.Logic.Entities;
using MyApp.Logic;
using Reusable.Rest;
using ServiceStack;
using ServiceStack.OrmLite;
using System;
using System.Threading.Tasks;
using ServiceStack.Text;
using Reusable.Rest.Implementations.SS;

namespace MyApp.API
{
    // [Authenticate]
    public class BadgeService : BaseService<BadgeLogic>
    {
        #region Endpoints - Generic Read Only
        public object Get(GetAllBadges request)
        {
            return WithDb(db => Logic.GetAll());
        }

        public object Get(GetBadgeById request)
        {
            return WithDb(db => Logic.GetById(request.Id));
        }

        public object Get(GetBadgeWhere request)
        {
            return WithDb(db => Logic.GetSingleWhere(request.Property, request.Value));
        }

        public object Get(GetPagedBadges request)
        {
            return WithDb(db => Logic.GetPaged(
                request.Limit,
                request.Page,
                request.FilterGeneral));
        }
        #endregion

        #region Endpoints - Generic Write
        public object Post(CreateBadgeInstance request)
        {
            return WithDb(db => {
                var entity = request.ConvertTo<Badge>();
                return new HttpResult(new CommonResponse(Logic.CreateInstance(entity)))
                {
                    ResultScope = () => JsConfig.With(new Config { IncludeNullValues = true })
                };
            });
        }

        public object Post(InsertBadge request)
        {
            var entity = request.ConvertTo<Badge>();
            return InTransaction(db => {
                Logic.Add(entity);
                return new CommonResponse(Logic.GetById(entity.Id));
            });
        }

        public object Put(UpdateBadge request)
        {
            var entity = request.ConvertTo<Badge>();
            return InTransaction(db => {
                Logic.Update(entity);
                return new CommonResponse(Logic.GetById(entity.Id));
            });
        }
        public object Delete(DeleteBadge request)
        {
            var entity = request.ConvertTo<Badge>();
            return InTransaction(db => {
                Logic.RemoveById(entity.Id);
                return new CommonResponse();
            });
        }
        #endregion

        #region Endpoints - Specific
        ///start:slot:endpoints<<<
		public object Post(CheckOut request)
		{
			var entity = request.ConvertTo<Badge>();
			return InTransaction(db => {
				Logic.CheckOut(entity.Value);
				return new CommonResponse();
			});
		}
		///end:slot:endpoints<<<
        #endregion
    }

    #region Specific
    ///start:slot:endpointsRoutes<<<
	[Route("/Badge/CheckOut/{Value}", "POST")]
	public class CheckOut : Badge { }
	///end:slot:endpointsRoutes<<<
    #endregion

    #region Generic Read Only
    [Route("/Badge", "GET")]
    public class GetAllBadges : GetAll<Badge> { }

    [Route("/Badge/{Id}", "GET")]
    public class GetBadgeById : GetSingleById<Badge> { }

    [Route("/Badge/GetSingleWhere", "GET")]
    [Route("/Badge/GetSingleWhere/{Property}/{Value}", "GET")]
    public class GetBadgeWhere : GetSingleWhere<Badge> { }

    [Route("/Badge/GetPaged/{Limit}/{Page}", "GET")]
    public class GetPagedBadges : GetPaged<Badge> { }
    #endregion

    #region Generic Write
    [Route("/Badge/CreateInstance", "POST")]
    public class CreateBadgeInstance : Badge { }

    [Route("/Badge", "POST")]
    public class InsertBadge : Badge { }

    [Route("/Badge", "PUT")]
    public class UpdateBadge : Badge { }

    [Route("/Badge", "DELETE")]
    [Route("/Badge/{Id}", "DELETE")]
    public class DeleteBadge : Badge { }
    #endregion
}
