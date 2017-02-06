class V1::PlaylistsController < V1::BaseController

  before_action :validate_json_params, only: [:songs_add, :songs_delete]
  before_action :transform_params, only: [:create, :update]

  def index
    @playlists = Playlist.all
  end

  def create
    @playlist = Playlist.create!(playlist_params)
    render :show
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def update
    @playlist = Playlist.find(params[:id])
    @playlist.update!(playlist_params)
    render :show
  end

  def destroy
    playlist = Playlist.find(params[:id])
    playlist.destroy
    head :no_content
  end

  def songs
    playlist = Playlist.find(params[:id])
    @songs = playlist.songs
    render 'v1/songs/index'
  end

  def songs_add
    playlist = Playlist.find(params[:id])
    raise V1::Exceptions::BadRequestError if song_ids_from_request.empty?
    add_song_ids = song_ids_from_request - playlist.song_ids
    unless add_song_ids.empty?
      Playlist.transaction do
        add_song_ids.each do |id|
          playlist.playlist_songs.create!(song_id: id)
        end
      end
    end
    head :ok
  end

  def songs_delete
    playlist = Playlist.find(params[:id])
    raise V1::Exceptions::BadRequestError if song_ids_from_request.empty?
    unless song_ids_from_request.empty?
      Playlist.transaction do
        playlist.playlist_songs.where(song_id: song_ids_from_request).destroy_all
      end
    end
    head :ok
  end

  private

  def transform_params
    if params[:data]
      params[:data][:user_id] = params[:data][:user][:id] if params[:data][:user]
    end
  end

  def playlist_params
    params.require(:data).permit(:name, :user_id)
  end

  def song_ids_from_request
    return @song_ids_from_request unless @song_ids_from_request.nil?
    song_ids = params[:data].map {|x| x[:id].to_i}
    @song_ids_from_request = song_ids.compact.reject {|x| x == 0}
  end
end
