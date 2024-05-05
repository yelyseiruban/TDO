$output = docker system df -v | Select-String -Pattern "Local Volumes space usage:" -Context 0, 100

$volumeInfo = $output | ForEach-Object {
    $_.Context.PostContext | ForEach-Object {
        if ($_ -notlike "*VOLUME NAME*") {
            $fields = $_ -split "\s+"

            $volumeName = $fields[0]
            $volumeSize = $fields[2]

            [PSCustomObject]@{
                VolumeName = $volumeName
                Size = $volumeSize
            }
        }
    }
}

$volumeInfo