module Api
  class RecordsController < BaseController
    before_action :find_record, only: [:show, :update, :destroy]

    def index
      render json: current_user.records
    end

    def show
      render json: @record
    end

    def create
      new_record = current_user.records.new(record_params)

      if new_record.save
        render json: new_record, status: 201
      else
        render(
          json: {errors: new_record.errors.full_messages},
          status: 422
        )
      end
    end

    def update
      if @record.update(record_params)
        render json: @record, status: 201
      else
        render(
          json: {errors: @record.errors.full_messages},
          status: 422
        )
      end
    end

    def destroy
      if @record.destroy
        # TODO: address empty json when looking into API base controller
        render json: {}, status: 204 # rubocop:disable Rails/UnusedRenderContent
      else
        render(
          json: {errors: @record.errors.full_messages},
          status: 422
        )
      end
    end

    private

    def find_record
      @record = current_user.records.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: {}, status: 404
    end

    def record_params
      params.require(:record).permit(:title)
    end
  end
end
