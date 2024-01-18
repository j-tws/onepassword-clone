require "rails_helper"

RSpec.describe "Api::Records" do
  fixtures :users
  fixtures :records

  before { sign_in users(:justin) }

  describe "GET /api/records/index" do
    it "gets all user's records" do
      get "/api/records/index"

      expect(response).to have_http_status(200)

      body = response.parsed_body
      expect(body.length).to eq(2)
      expect(body.first["title"]).to eq("google")
      expect(body.second["title"]).to eq("facebook")
    end
  end

  describe "GET /api/records/:id" do
    it "gets the correct queried record" do
      get "/api/records/#{records(1).id}"
      expect(response).to have_http_status(200)

      body = response.parsed_body

      expect(body["title"]).to eq("facebook")
    end

    context "when the user doesn't own the record" do
      it "returns a 404" do
        get "/api/records/#{records(3).id}"
        expect(response).to have_http_status(404)
      end
    end
  end

  describe "POST /api/records/" do # create
    it "creates new records when passed valid params" do
      expect { post "/api/records", params: {record: {title: "nuclear codes"}} }
        .to change(Record, :count).by(1)
      expect(response).to have_http_status(201)

      body = response.parsed_body

      expect(body["title"]).to eq("nuclear codes")
    end

    context "with invalid attributes" do
      it "returns a 422 with errors" do
        expect { post "/api/records", params: {record: {title: ""}} }
          .not_to change(Record, :count)
        expect(response).to have_http_status(422)
        expect(response.parsed_body).to eq(
          {"errors" => ["Title can't be blank"]}
        )
      end
    end
  end

  describe "PUT /api/records/:id" do # update - investigate patch vs put
    it "edit the record with valid params" do
      record = records(1)

      put "/api/records/#{record.id}", params: {record: {title: "nuclear codes"}}
      body = response.parsed_body

      expect(response).to have_http_status(201)
      expect(body["title"]).to eq("nuclear codes")
      expect(record.reload.title).to eq("nuclear codes")
    end

    context "when user does not own the record" do
      it "will respond with 404 status" do
        put "/api/records/#{records(3).id}", params: {record: {title: "nuclear codes"}}

        expect(response).to have_http_status(404)
      end
    end

    context "when a record does not exist" do
      it "will respond with 404 status" do
        put "/api/records/1a", params: {record: {title: "facebook"}}

        expect(response).to have_http_status(404)
      end
    end

    context "with invalid attributes" do
      it "returns a 422 with errors" do
        record = records(1)

        put "/api/records/#{record.id}", params: {record: {title: ""}}

        expect(response).to have_http_status(422)
        expect(response.parsed_body).to eq(
          {"errors" => ["Title can't be blank"]}
        )
        expect(record.reload.title).to eq("facebook")
      end
    end
  end

  describe "DELETE /api/records/:id" do # destroy
    it "destroys the record" do
      record = records(1)

      delete "/api/records/#{record.id}"

      expect(Record.find_by(id: record.id)).to be_nil
      expect(response).to have_http_status(204)
    end

    context "when user does not own the record" do
      it "will respond with 404 status" do
        delete "/api/records/#{records(3).id}"

        expect(response).to have_http_status(404)
      end
    end
  end
end
