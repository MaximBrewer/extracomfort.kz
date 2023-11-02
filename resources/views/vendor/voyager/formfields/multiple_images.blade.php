<br>sdsds
@if(isset($dataTypeContent->{$row->field}))
    <?php $images = json_decode($dataTypeContent->{$row->field}); ?>
    @if($images != null)
    <ol id="sortable3">
        @foreach($images as $image)
            <li class="img_settings_container" data-field-name="{{ $row->field }}" style="float:left;padding-right:15px;">
                <a href="#" class="voyager-x remove-multi-image" style="position: absolute;"></a>
                <img src="{{ Voyager::image( $image ) }}" data-file-name="{{ $image }}" data-id="{{ $dataTypeContent->getKey() }}" style="max-width:200px; height:auto; clear:both; display:block; padding:2px; border:1px solid #ddd; margin-bottom:5px;">
            </li>
        @endforeach
    @endif
    </ol>
@endif
<div class="clearfix"></div>
<input @if($row->required == 1 && !isset($dataTypeContent->{$row->field})) required @endif type="file" name="{{ $row->field }}[]" multiple="multiple" accept="image/*">
<script>
window.addEventListener("load", (event) => {
jQuery("#sortable3").sortable();
})
</script>
<style>

ol#sortable3 li.placeholder {
  position: relative;
  /** More li styles **/
}
ol#sortable3 li.placeholder:before {
  position: absolute;
  /** Define arrowhead **/
}
</style>