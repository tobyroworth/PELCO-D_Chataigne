
function formatCommand(address, command1, command2, data1, data2) {
  var bytes = [0xff, address, command1, command2, data1, data2];
  bytes.push(checksum(bytes));
  return bytes;
}

function checksum(bytes) {
  var checksum = 0;
	for (var i = 1; i < bytes.length; i++) {
		checksum += bytes[i];
	}
  return checksum % 0x100;
}

function recallPreset(preset) {
  var bytes = formatCommand(
    local.parameters.cameraAddress.get(),
    0,
    7,
    0,
    preset
  );
  local.sendBytes(bytes);
}